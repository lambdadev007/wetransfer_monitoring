<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reporting file</title>
    <style>
        *{ font-family: DejaVu Sans !important; padding: 0; margin: 0; box-sizing: border-box;}
        p, li{ font-size: 11px;}
        ol{margin-left:20px}
        h6{padding-top:10px}
        .float-container {padding: 20px;}
        .float-child {width: 50%;float: left;padding: 20px;}
        hr{color:#ccc;}
    </style>
</head>
<body>
    <center>
        <h3 style="padding-top:20px">არჩეული ფილტრები</h3>
    </center>
    <div class="float-container">
        <div class="float-child">
            <h6>ავტორი:</h6> 
            <p>
                {{ object_get(auth()->user(), 'job.name') ? object_get(auth()->user(), 'job.name') : object_get(auth()->user(), 'name') }}
            </p>  
        </div>
        <div class="float-child">
            <h6>გენერირების თარიღი:</h6> 
            <p>
                {{ localizedDate(now(), true) .' ' . now()->format('H:i'), }}
            </p>  
        </div>
    </div>
    <div style="margin:40px">
        @if(isset($filterParams['user']))
            <h6>სტრუქტურული ერთეული:</h6> 
            <p>
                {{ $filterParams['user'] }}
            </p>
        @endif
        @if(isset($filterParams['goal']))
            <h6>სტრატეგიული მიზანი:</h6> 
            <p>
                {{ $filterParams['goal'] }}
            </p>
        @endif
        @if(isset($filterParams['months']))
            <h6>კვარტალი:</h6> 
            <p>
                {{ $filterParams['months'] }}
            </p>
        @endif
        @if(isset($filterParams['status']))
        <h6>შესრულების სტატუსი:</h6> 
        <p>
            {{ $filterParams['status'] }}
        </p>
        @endif
    </div>
    <hr>
    @forelse ($activities as $item)
        <div style="margin:40px">
            <h6>სტრატეგიული მიზანი:</h6> 
            <p>
                {{ object_get($item, 'task.goal.name') }}
            </p>
            <h6>სტრატეგიული ამოცანა:</h6> 
            <p>
                {{ object_get($item, 'task.name') }}
            </p>
            <h6>აქტივობა:</h6> 
            <p>
                {{ object_get($item, 'name') }}
            </p>
            <h6>განხორციელების პერიოდი:</h6> 
            <p>
                {{ $item->months->sortBy('pivot.month_id')->pluck('name')->implode(', ') }}
            </p>
            <h6>პასუხისმგებელი სტრუქტურული ერთეული/უფლებამოსილი პირი:</h6> 
            <p>
                {{ object_get($item, 'mainUser.job.name') }}
            </p>
            <h6>დამხმარე სტრუქტურული ერთეულები/უფლებამოსილი პირები:</h6> 
            @if ($item->users->isNotEmpty())
                <p>
                    {{ $item->users->pluck('job.name')->implode(", ") }}
                </p>
            @else
            <p>არ არის მითითებული</p>
            @endif
            <h6>ინდიკატორები / მტკიცებულებები:</h6> 
            @foreach ($item->indicators as $indicator)
                <p>
                    <ol>
                        <li>
                            {{ object_get($indicator, 'name') }}
                            <ul style="margin-left:20px">
                                @foreach ($indicator->evidences as $evidence)
                                    <li>
                                        {{ object_get($evidence, 'name') }}
                                        @foreach ($evidence->media as $file)
                                            <p><a target="_blank" href="{{ $file->getFullUrl() }}">{{ $file->name . ' - '. localizedDate($file->created_at, true) }}</a></p>
                                        @endforeach
                                    </li>
                                @endforeach
                            </ul>
                        </li>
                    </ol>
                </p>
            @endforeach
            <h6>ადამიანური რესურსი:</h6> 
            <p>
                {{ object_get($item, 'humanResource.name', 'არ არის მითითებული') }}
            </p>
            <h6>დაფინანსების წყარო:</h6> 
            <!-- <p>
                {{ object_get($item, 'sourceOfFunding.name', 'არ არის მითითებული') }}
            </p> -->
            <h6>მატერიალური რესურსი:</h6> 
            <p>
                {{ object_get($item, 'materialResource.name', 'არ არის მითითებული') }}
            </p>
            <h6>პიარ აქტივობა:</h6> 
            <!-- <p>
                {{ object_get($item, 'pr_activity', 'არ არის მითითებული') }}
            </p> -->
            <h6>სტატუსი:</h6> 
            @php
                $status = $item->status_id ? $item->status->name : 'არ არის დაწყებული';
                $mainStatus = $item->main_status_id ?  $item->mainStatus->name : $status;  
            @endphp
            <p>
                {{ $status }}
            </p>
            <h6>პროცენტი:</h6> 
            <p>
                {{ object_get($item, 'percent') ?  object_get($item, 'percent') . ' %' : 'არ არის მითითებული' }}
            </p>
            <h6>შენიშვნა:</h6> 
            <p>
                {{ object_get($item, 'user_remark' , 'არ არის მითითებული') }}
            </p>
            <h6>კვარტალური აქტივობების შესრულების აღწერა:</h6> 
            <p>
                {{ object_get($item, 'comment' , 'არ არის მითითებული') }}
            </p>
            <h6>კვარტალური აქტივობების შესრულების აღწერა:</h6> 
            <p>
                @if($item->hasMedia('comments'))
                <ul style="margin-left:20px">
                    @foreach ($item->getMedia('comments') as $cMedia)
                        <li>
                            <p><a target="_blank" href="{{ $cMedia->getFullUrl() }}">{{ $cMedia->name . ' - '. localizedDate($cMedia->created_at, true) }}</a></p>
                        </li>
                    @endforeach
                </ul>
                @endif
            </p>
        </div>
    @empty
        <center>
            <h3 style="padding-top:20px">ასეთი ფილტრებით ჩანაწერი არ მოიძებნა!</h3>
        </center>
    @endforelse
    <hr>
</body>
</html>

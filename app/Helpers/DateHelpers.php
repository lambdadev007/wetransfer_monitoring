<?php

use Illuminate\Support\Facades\Lang;

function localizedDate($datetime, $year = false, $fullMonth = true, $time = false)
{
    if (is_null($datetime)) {
        return;
    }
    $timestamp = strtotime($datetime);
    $date = getdate($timestamp);
    $index = $date['mon'] - 1;
    $month = trans('date.months.' . $index, [], Lang::getLocale());
    $month = !$fullMonth ? str_limit($month, 3, '') : $month;

    $result = $date['mday'] . ' ' . $month;
    $result = $year ? $result . ' ' . $date['year'] : $result;

    $result = $time ? $result . ' ' . $date['hours'] . ':' . $date['minutes'] . ':' . $date['seconds'] : $result;

    return $result;
}

function localizedMonth($index, $limit = false)
{
    $month = trans('date.months.' . ($index - 1));

    if ($limit > 0) {
        $month = str_limit($month, $limit, '');
    }

    return $month;
}

function localizedDay($index, $limit = false)
{
    $day = trans('date.days.' . $index);

    if ($limit > 0) {
        $day = str_limit($day, $limit, '');
    }

    return $day;
}

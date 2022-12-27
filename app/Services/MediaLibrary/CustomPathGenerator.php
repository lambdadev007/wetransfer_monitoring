<?php

namespace App\Services\MediaLibrary;

use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator as BasePathGenerator;

class CustomPathGenerator implements BasePathGenerator 
{
    public function getPath(Media $media): string
    {
        return md5($media->id . config('app.key')) . '/';
    }

    public function getPathForConversions(Media $media): string
    {
        return md5($media->id . config('app.key')) . '/conversions/';
    }

    public function getPathForResponsiveImages(Media $media): string
    {
        return md5($media->id . config('app.key')) . '/responsive-images/';
    }
}
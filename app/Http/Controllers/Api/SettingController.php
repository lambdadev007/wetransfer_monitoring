<?php

namespace App\Http\Controllers\Api;

use Appstract\Options\Option;
use App\Http\Controllers\Controller;

class SettingController extends Controller
{
    public function index()
    {
        $options = Option::all();
        return $this->success($options);
    }

    public function store()
    {
        $data = request('attributes', []);

        option($data);

        $options = Option::all();

        $options = $options->each(function ($item) use ($data) {
            if (!isset($data[$item->key])) {
                option()->remove($item->key);
            }
        });

        $options = $options->all();

        return $this->success($options);
    }
}

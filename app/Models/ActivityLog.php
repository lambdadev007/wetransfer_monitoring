<?php

namespace App\Models;

use Spatie\Activitylog\Models\Activity;

class ActivityLog extends Activity
{
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($query) {
            $query->ip_address = self::getIp();
        });
    }

    /**
     * Checks for ip address and filters it to ignore localhost and similiar ips.
     * @return string if ip address is found, null otherwise
     */
    private static function getIp()
    {
        $targets = [
            'HTTP_CLIENT_IP',
            'HTTP_X_FORWARDED_FOR',
            'HTTP_X_FORWARDED',
            'HTTP_X_CLUSTER_CLIENT_IP',
            'HTTP_FORWARDED_FOR',
            'HTTP_FORWARDED',
            'REMOTE_ADDR'
        ];
        foreach ($targets as $key) {
            if (array_key_exists($key, $_SERVER)) {
                foreach (explode(',', $_SERVER[$key]) as $ip) {
                    $ip = trim($ip);
                    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
                        return $ip;
                    }
                }
            }
        }
        return request()->ip();
    }
}

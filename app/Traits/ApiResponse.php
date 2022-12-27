<?php


namespace App\Traits;


use Illuminate\Contracts\Validation\Validator;
use Throwable;
use function response;

trait ApiResponse
{

    public function jsonResponse(bool $success, $payload = null, $code = 200)
    {
        return response()->json([
            'success' => $success,
            'payload' => $payload,
        ], $code);
    }

    public function success($payload = null, $code = 200)
    {
        return $this->jsonResponse(true, $payload, $code);
    }

    public function error($payload = null, $code = 422)
    {
        return $this->jsonResponse(false, $payload, $code);
    }

    public function exception(Throwable $exception)
    {
        return $this->jsonResponse(false, [
            'cause' => $exception->getMessage(),
            'file' => $exception->getFile(),
            'line' => $exception->getLine(),
        ], 500);
    }

    public function validatorError(Validator $validator, $message = null)
    {
        return $this->error($message, $validator->errors(), 422);
    }

}

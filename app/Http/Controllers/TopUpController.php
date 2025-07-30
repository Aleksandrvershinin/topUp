<?php

namespace App\Http\Controllers;

use App\DTO\TopUpData;
use App\Http\Requests\TopUpRequest;
use App\Services\TopUpService;
use Illuminate\Http\JsonResponse;

class TopUpController extends Controller
{
    public function store(TopUpRequest $request, TopUpService $service): JsonResponse
    {
        $dto = new TopUpData($request->validated());

        $success = $service->handle($dto);

        return response()->json([
            'success' => $success
        ]);
    }
}

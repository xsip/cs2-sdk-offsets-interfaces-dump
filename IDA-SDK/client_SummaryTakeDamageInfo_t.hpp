#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_CTakeDamageInfo.hpp"
#include "client_CTakeDamageResult.hpp"

class client_SummaryTakeDamageInfo_t {
    int32_t nSummarisedCount;
    char pad_2460[0x4];
    client_CTakeDamageInfo info;
    client_CTakeDamageResult result;
    char hTarget[0x4];
    char end_pad_2461[0x4];
};

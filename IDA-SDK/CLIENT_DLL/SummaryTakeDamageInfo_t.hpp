#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CTakeDamageInfo.hpp"
#include "CTakeDamageResult.hpp"

class SummaryTakeDamageInfo_t {
    int32_t nSummarisedCount;
    char pad_1088[0x4];
    CTakeDamageInfo info;
    CTakeDamageResult result;
    char hTarget[0x4];
    char end_pad_1089[0x4];
};

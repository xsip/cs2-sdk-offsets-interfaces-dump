#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CTimeRemainingMetricEvaluator {
    char vTable80[0x18];
    char m_means[0x18];
    char m_standardDeviations[0x18];
    float32 m_flWeight;
    int32_t m_nDimensionStartIndex;
    bool m_bMatchByTimeRemaining;
    char pad_242[0x3];
    float32 m_flMaxTimeRemaining;
    bool m_bFilterByTimeRemaining;
    char pad_243[0x3];
    float32 m_flMinTimeRemaining;
};

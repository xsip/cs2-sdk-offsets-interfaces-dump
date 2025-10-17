#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CFutureVelocityMetricEvaluator {
    char vTable80[0x18];
    char m_means[0x18];
    char m_standardDeviations[0x18];
    float32 m_flWeight;
    int32_t m_nDimensionStartIndex;
    float32 m_flDistance;
    float32 m_flStoppingDistance;
    float32 m_flTargetSpeed;
    animgraphlib_VelocityMetricMode m_eMode;
    char end_pad_151[0x3];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CBlockSelectionMetricEvaluator {
    char vTable80[0x18];
    char m_means[0x18];
    char m_standardDeviations[0x18];
    float32 m_flWeight;
    int32_t m_nDimensionStartIndex;
};

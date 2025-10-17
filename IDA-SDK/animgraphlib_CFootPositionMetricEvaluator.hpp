#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CFootPositionMetricEvaluator {
    char vTable80[0x18];
    char m_means[0x18];
    char m_standardDeviations[0x18];
    float32 m_flWeight;
    int32_t m_nDimensionStartIndex;
    char m_footIndices[0x18];
    bool m_bIgnoreSlope;
    char end_pad_147[0x7];
};

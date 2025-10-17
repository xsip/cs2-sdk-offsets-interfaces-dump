#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CPathMetricEvaluator {
    char vTable80[0x18];
    char m_means[0x18];
    char m_standardDeviations[0x18];
    float32 m_flWeight;
    int32_t m_nDimensionStartIndex;
    char m_pathTimeSamples[0x18];
    float32 m_flDistance;
    bool m_bExtrapolateMovement;
    char pad_200[0x3];
    float32 m_flMinExtrapolationSpeed;
    char end_pad_201[0x4];
};

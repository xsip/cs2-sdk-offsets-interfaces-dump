#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CPathMetricEvaluator {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    char m_means[0x18];
    char m_standardDeviations[0x18];
    float32 m_flWeight;
    int32_t m_nDimensionStartIndex;
    char m_pathTimeSamples[0x18];
    float32 m_flDistance;
    bool m_bExtrapolateMovement;
    char pad_206[0x3];
    float32 m_flMinExtrapolationSpeed;
    char end_pad_207[0x4];
};

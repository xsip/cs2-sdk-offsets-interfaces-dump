#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CDistanceRemainingMetricEvaluator {
    char vTable80[0x18];
    char m_means[0x18];
    char m_standardDeviations[0x18];
    float32 m_flWeight;
    int32_t m_nDimensionStartIndex;
    float32 m_flMaxDistance;
    float32 m_flMinDistance;
    float32 m_flStartGoalFilterDistance;
    float32 m_flMaxGoalOvershootScale;
    bool m_bFilterFixedMinDistance;
    bool m_bFilterGoalDistance;
    bool m_bFilterGoalOvershoot;
    char end_pad_112[0x5];
};

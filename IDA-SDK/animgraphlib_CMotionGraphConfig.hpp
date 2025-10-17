#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_MotionIndex.hpp"

class animgraphlib_CMotionGraphConfig {
    float32 m_paramValues[4];
    float32 m_flDuration;
    animgraphlib_MotionIndex m_nMotionIndex;
    int32_t m_nSampleStart;
    int32_t m_nSampleCount;
};

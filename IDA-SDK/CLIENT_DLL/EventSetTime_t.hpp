#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "EngineLoopState_t.hpp"

class EventSetTime_t {
    EngineLoopState_t m_LoopState;
    int32_t m_nClientOutputFrames;
    char pad_1065[0x4];
    float64 m_flRealTime;
    float64 m_flRenderTime;
    float64 m_flRenderFrameTime;
    float64 m_flRenderFrameTimeUnbounded;
    float64 m_flRenderFrameTimeUnscaled;
    float64 m_flTickRemainder;
};

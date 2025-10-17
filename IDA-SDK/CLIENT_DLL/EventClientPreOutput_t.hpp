#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "EngineLoopState_t.hpp"

class EventClientPreOutput_t {
    EngineLoopState_t m_LoopState;
    float64 m_flRenderTime;
    float64 m_flRenderFrameTime;
    float64 m_flRenderFrameTimeUnbounded;
    float32 m_flRealTime;
    bool m_bRenderOnly;
    char end_pad_1060[0x3];
};

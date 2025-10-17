#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "EngineLoopState_t.hpp"

class EventClientPostOutput_t {
    EngineLoopState_t m_LoopState;
    float64 m_flRenderTime;
    float32 m_flRenderFrameTime;
    float32 m_flRenderFrameTimeUnbounded;
    bool m_bRenderOnly;
    char end_pad_1059[0x7];
};

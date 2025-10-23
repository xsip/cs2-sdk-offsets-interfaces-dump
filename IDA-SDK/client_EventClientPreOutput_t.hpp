#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_EngineLoopState_t.hpp"

class client_EventClientPreOutput_t {
    client_EngineLoopState_t m_LoopState;
    float64 m_flRenderTime;
    float64 m_flRenderFrameTime;
    float64 m_flRenderFrameTimeUnbounded;
    float32 m_flRealTime;
    bool m_bRenderOnly;
    char end_pad_1621[0x3];
};

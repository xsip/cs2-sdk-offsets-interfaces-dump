#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_EngineLoopState_t.hpp"

class client_EventClientPostOutput_t {
    client_EngineLoopState_t m_LoopState;
    float64 m_flRenderTime;
    float32 m_flRenderFrameTime;
    float32 m_flRenderFrameTimeUnbounded;
    bool m_bRenderOnly;
    char end_pad_1620[0x7];
};

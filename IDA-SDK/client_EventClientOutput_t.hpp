#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_EngineLoopState_t.hpp"

class client_EventClientOutput_t {
    client_EngineLoopState_t m_LoopState;
    float32 m_flRenderTime;
    float32 m_flRealTime;
    float32 m_flRenderFrameTimeUnbounded;
    bool m_bRenderOnly;
    char end_pad_1619[0x3];
};

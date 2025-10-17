#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "EngineLoopState_t.hpp"

class EventClientOutput_t {
    EngineLoopState_t m_LoopState;
    float32 m_flRenderTime;
    float32 m_flRealTime;
    float32 m_flRenderFrameTimeUnbounded;
    bool m_bRenderOnly;
    char end_pad_1057[0x3];
};

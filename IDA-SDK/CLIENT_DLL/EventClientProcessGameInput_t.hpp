#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "EngineLoopState_t.hpp"

class EventClientProcessGameInput_t {
    EngineLoopState_t m_LoopState;
    float32 m_flRealTime;
    float32 m_flFrameTime;
};

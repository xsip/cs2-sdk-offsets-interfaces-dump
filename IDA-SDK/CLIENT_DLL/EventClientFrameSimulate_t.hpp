#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "EngineLoopState_t.hpp"

class EventClientFrameSimulate_t {
    EngineLoopState_t m_LoopState;
    float32 m_flRealTime;
    float32 m_flFrameTime;
    bool m_bScheduleSendTickPacket;
    char end_pad_1056[0x7];
};

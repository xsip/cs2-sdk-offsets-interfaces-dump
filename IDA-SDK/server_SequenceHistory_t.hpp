#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_HSequence.hpp"
#include "entity2_GameTime_t.hpp"

class server_SequenceHistory_t {
    animationsystem_HSequence m_hSequence;
    entity2_GameTime_t m_flSeqStartTime;
    float32 m_flSeqFixedCycle;
    client_AnimLoopMode_t m_nSeqLoopMode;
    float32 m_flPlaybackRate;
    float32 m_flCyclesPerSecond;
};

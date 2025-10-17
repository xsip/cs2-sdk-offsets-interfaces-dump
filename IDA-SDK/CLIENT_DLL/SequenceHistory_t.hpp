#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "HSequence.hpp"
#include "GameTime_t.hpp"

class SequenceHistory_t {
    HSequence m_hSequence;
    GameTime_t m_flSeqStartTime;
    float32 m_flSeqFixedCycle;
    AnimLoopMode_t m_nSeqLoopMode;
    float32 m_flPlaybackRate;
    float32 m_flCyclesPerSecond;
};

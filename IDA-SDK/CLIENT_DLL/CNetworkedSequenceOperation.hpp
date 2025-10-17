#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "HSequence.hpp"

class CNetworkedSequenceOperation {
    char _vtable_pad_440[0x8];
    HSequence m_hSequence;
    float32 m_flPrevCycle;
    float32 m_flCycle;
    CNetworkedQuantizedFloat m_flWeight;
    bool m_bSequenceChangeNetworked;
    bool m_bDiscontinuity;
    char pad_441[0x2];
    float32 m_flPrevCycleFromDiscontinuity;
    float32 m_flPrevCycleForAnimEventDetection;
};

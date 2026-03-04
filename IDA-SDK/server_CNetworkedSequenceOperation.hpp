#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_HSequence.hpp"

class server_CNetworkedSequenceOperation {
    void **__vftable_0;
    animationsystem_HSequence m_hSequence;
    float32 m_flPrevCycle;
    float32 m_flCycle;
    CNetworkedQuantizedFloat m_flWeight;
    bool m_bSequenceChangeNetworked;
    bool m_bDiscontinuity;
    char pad_3945[0x2];
    float32 m_flPrevCycleFromDiscontinuity;
    float32 m_flPrevCycleForAnimEventDetection;
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_CSeqSeqDescFlag.hpp"
#include "animationsystem_CSeqTransition.hpp"

class animationsystem_CSeqSynthAnimDesc {
    CBufferString m_sName;
    animationsystem_CSeqSeqDescFlag m_flags;
    char pad_450[0x1];
    animationsystem_CSeqTransition m_transition;
    int16_t m_nLocalBaseReference;
    int16_t m_nLocalBoneMask;
    char m_activityArray[0x18];
};

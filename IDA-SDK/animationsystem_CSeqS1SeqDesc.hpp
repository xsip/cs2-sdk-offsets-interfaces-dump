#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_CSeqSeqDescFlag.hpp"
#include "animationsystem_CSeqMultiFetch.hpp"
#include "animationsystem_CSeqTransition.hpp"

class animationsystem_CSeqS1SeqDesc {
    CBufferString m_sName;
    animationsystem_CSeqSeqDescFlag m_flags;
    char pad_445[0x5];
    animationsystem_CSeqMultiFetch m_fetch;
    int32_t m_nLocalWeightlist;
    char pad_446[0x4];
    char m_autoLayerArray[0x18];
    char m_IKLockArray[0x18];
    animationsystem_CSeqTransition m_transition;
    KeyValues3 m_SequenceKeys;
    CBufferString m_LegacyKeyValueText;
    char m_activityArray[0x18];
    char m_footMotion[0x18];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_CSeqSeqDescFlag.hpp"
#include "animationsystem_CSeqTransition.hpp"

class animationsystem_CSeqCmdSeqDesc {
    CBufferString m_sName;
    animationsystem_CSeqSeqDescFlag m_flags;
    char pad_438[0x1];
    animationsystem_CSeqTransition m_transition;
    int16_t m_nFrameRangeSequence;
    int16_t m_nFrameCount;
    float32 m_flFPS;
    int16_t m_nSubCycles;
    int16_t m_numLocalResults;
    char m_cmdLayerArray[0x18];
    char m_eventArray[0x18];
    char m_activityArray[0x18];
    char m_poseSettingArray[0x18];
};

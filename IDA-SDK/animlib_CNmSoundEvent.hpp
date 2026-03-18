#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_NmPercent_t.hpp"
#include "animlib_NmPercent_t.hpp"

class animlib_CNmSoundEvent {
    void **__vftable_0;
    animlib_NmPercent_t m_flStartTime;
    animlib_NmPercent_t m_flDuration;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_2497[0x7];
    animlib_CNmEventRelevance_t m_relevance;
    char pad_2541[0x4];
    CUtlString m_name;
    animlib_Position_t m_position;
    char pad_2542[0x4];
    CUtlString m_attachmentName;
    CUtlString m_tags;
    bool m_bContinuePlayingSoundAtDurationEnd;
    char pad_2543[0x3];
    float32 m_flDurationInterruptionThreshold;
};

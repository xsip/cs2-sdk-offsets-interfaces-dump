#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmSoundEvent {
    char vTable1723[0x8];
    float32 m_flStartTimeSeconds;
    float32 m_flDurationSeconds;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_1724[0x7];
    animlib_CNmEventRelevance_t m_relevance;
    char pad_1765[0x4];
    CUtlString m_name;
    animlib_Position_t m_position;
    char pad_1766[0x4];
    CUtlString m_attachmentName;
    CUtlString m_tags;
    bool m_bContinuePlayingSoundAtDurationEnd;
    char pad_1767[0x3];
    float32 m_flDurationInterruptionThreshold;
};

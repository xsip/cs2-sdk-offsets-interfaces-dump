#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmParticleEvent {
    char vTable1724[0x8];
    float32 m_flStartTimeSeconds;
    float32 m_flDurationSeconds;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_1725[0x7];
    animlib_CNmEventRelevance_t m_relevance;
    animlib_Type_t m_type;
    char m_hParticleSystem[0x8];
    CUtlString m_tags;
    bool m_bStopImmediately;
    bool m_bDetachFromOwner;
    bool m_bPlayEndCap;
    char pad_1756[0x5];
    CUtlString m_attachmentPoint0;
    animationsystem_ParticleAttachment_t m_attachmentType0;
    char pad_1757[0x4];
    CUtlString m_attachmentPoint1;
    animationsystem_ParticleAttachment_t m_attachmentType1;
    char pad_1758[0x4];
    CUtlString m_config;
    CUtlString m_effectForConfig;
};

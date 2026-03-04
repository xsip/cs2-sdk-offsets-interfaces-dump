#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_NmPercent_t.hpp"
#include "animlib_NmPercent_t.hpp"

class animlib_CNmParticleEvent {
    void **__vftable_0;
    animlib_NmPercent_t m_flStartTime;
    animlib_NmPercent_t m_flDuration;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_2498[0x7];
    animlib_CNmEventRelevance_t m_relevance;
    animlib_Type_t m_type;
    char m_hParticleSystem[0x8];
    CUtlString m_tags;
    bool m_bStopImmediately;
    bool m_bDetachFromOwner;
    bool m_bPlayEndCap;
    char pad_2532[0x5];
    CUtlString m_attachmentPoint0;
    animationsystem_ParticleAttachment_t m_attachmentType0;
    char pad_2533[0x4];
    CUtlString m_attachmentPoint1;
    animationsystem_ParticleAttachment_t m_attachmentType1;
    char pad_2534[0x4];
    CUtlString m_config;
    CUtlString m_effectForConfig;
};

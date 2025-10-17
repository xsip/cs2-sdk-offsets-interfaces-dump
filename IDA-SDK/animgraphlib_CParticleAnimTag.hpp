#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimTagID.hpp"

class animgraphlib_CParticleAnimTag {
    char vTable53[0x18];
    CGlobalSymbol m_name;
    CUtlString m_sComment;
    CGlobalSymbol m_group;
    modellib_AnimTagID m_tagID;
    char pad_54[0x14];
    bool m_bIsReferenced;
    char end_pad_55[0x7];
    char vTable196[0x8];
    char m_hParticleSystem[0x8];
    CUtlString m_particleSystemName;
    CUtlString m_configName;
    bool m_bDetachFromOwner;
    bool m_bAggregate;
    bool m_bStopWhenTagEnds;
    bool m_bTagEndStopIsInstant;
    char pad_197[0x4];
    CUtlString m_attachmentName;
    animationsystem_ParticleAttachment_t m_attachmentType;
    char pad_198[0x4];
    CUtlString m_attachmentCP1Name;
    animationsystem_ParticleAttachment_t m_attachmentCP1Type;
    char end_pad_199[0x4];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimTagID.hpp"

class animgraphlib_CParticleAnimTag {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    CGlobalSymbol m_name;
    CUtlString m_sComment;
    CGlobalSymbol m_group;
    modellib_AnimTagID m_tagID;
    char pad_54[0x14];
    bool m_bIsReferenced;
    char end_pad_55[0x7];
    void **__vftable_3;
    char m_hParticleSystem[0x8];
    CUtlString m_particleSystemName;
    CUtlString m_configName;
    bool m_bDetachFromOwner;
    bool m_bAggregate;
    bool m_bStopWhenTagEnds;
    bool m_bTagEndStopIsInstant;
    char pad_203[0x4];
    CUtlString m_attachmentName;
    animationsystem_ParticleAttachment_t m_attachmentType;
    char pad_204[0x4];
    CUtlString m_attachmentCP1Name;
    animationsystem_ParticleAttachment_t m_attachmentCP1Type;
    char end_pad_205[0x4];
};

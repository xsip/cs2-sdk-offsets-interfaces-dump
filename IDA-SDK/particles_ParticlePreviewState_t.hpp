#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_ParticlePreviewState_t {
    CUtlString m_previewModel;
    uint32_t m_nModSpecificData;
    particles_PetGroundType_t m_groundType;
    CUtlString m_sequenceName;
    int32_t m_nFireParticleOnSequenceFrame;
    char pad_2359[0x4];
    CUtlString m_hitboxSetName;
    CUtlString m_materialGroupName;
    char m_vecBodyGroups[0x18];
    float32 m_flPlaybackSpeed;
    float32 m_flParticleSimulationRate;
    bool m_bShouldDrawHitboxes;
    bool m_bShouldDrawAttachments;
    bool m_bShouldDrawAttachmentNames;
    bool m_bShouldDrawControlPointAxes;
    bool m_bAnimationNonLooping;
    bool m_bSequenceNameIsAnimClipPath;
    char pad_2360[0x2];
    Vector m_vecPreviewGravity;
    char end_pad_2361[0x4];
};

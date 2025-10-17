#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particleslib_ParticleNamedValueConfiguration_t {
    CUtlString m_ConfigName;
    KeyValues3 m_ConfigValue;
    CUtlString m_BoundValuePath;
    animationsystem_ParticleAttachment_t m_iAttachType;
    char pad_1719[0x4];
    CUtlString m_strEntityScope;
    CUtlString m_strAttachmentName;
};

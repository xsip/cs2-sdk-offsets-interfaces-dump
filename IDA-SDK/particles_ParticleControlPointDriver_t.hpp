#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_ParticleControlPointDriver_t {
    ParticleParamID_t m_iControlPoint;
    animationsystem_ParticleAttachment_t m_iAttachType;
    char pad_1253[0x4];
    CUtlString m_attachmentName;
    Vector m_vecOffset;
    QAngle m_angOffset;
    CUtlString m_entityName;
};

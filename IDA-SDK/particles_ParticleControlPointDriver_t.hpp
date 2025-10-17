#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_ParticleControlPointDriver_t {
    int32_t m_iControlPoint;
    animationsystem_ParticleAttachment_t m_iAttachType;
    CUtlString m_attachmentName;
    Vector m_vecOffset;
    QAngle m_angOffset;
    CUtlString m_entityName;
};

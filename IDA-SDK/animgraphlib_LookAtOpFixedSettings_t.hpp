#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_CAnimAttachment.hpp"
#include "animgraphlib_CAnimInputDamping.hpp"

class animgraphlib_LookAtOpFixedSettings_t {
    modellib_CAnimAttachment m_attachment;
    animgraphlib_CAnimInputDamping m_damping;
    char m_bones[0x18];
    float32 m_flYawLimit;
    float32 m_flPitchLimit;
    float32 m_flHysteresisInnerAngle;
    float32 m_flHysteresisOuterAngle;
    bool m_bRotateYawForward;
    bool m_bMaintainUpDirection;
    bool m_bTargetIsPosition;
    bool m_bUseHysteresis;
    char end_pad_271[0xc];
};

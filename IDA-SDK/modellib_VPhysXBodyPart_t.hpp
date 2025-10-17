#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_VPhysics2ShapeDef_t.hpp"

class modellib_VPhysXBodyPart_t {
    uint32_t m_nFlags;
    float32 m_flMass;
    modellib_VPhysics2ShapeDef_t m_rnShape;
    uint16_t m_nCollisionAttributeIndex;
    uint16_t m_nReserved;
    float32 m_flInertiaScale;
    float32 m_flLinearDamping;
    float32 m_flAngularDamping;
    float32 m_flLinearDrag;
    float32 m_flAngularDrag;
    bool m_bOverrideMassCenter;
    char pad_399[0x3];
    Vector m_vMassCenterOverride;
};

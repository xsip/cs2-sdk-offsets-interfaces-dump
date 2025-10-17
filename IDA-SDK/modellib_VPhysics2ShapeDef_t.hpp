#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_VPhysics2ShapeDef_t {
    char m_spheres[0x18];
    char m_capsules[0x18];
    char m_hulls[0x18];
    char m_meshes[0x18];
    char m_CollisionAttributeIndices[0x18];
};

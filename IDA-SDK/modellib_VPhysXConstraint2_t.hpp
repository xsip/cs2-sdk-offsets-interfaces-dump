#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_VPhysXConstraintParams_t.hpp"

class modellib_VPhysXConstraint2_t {
    uint32_t m_nFlags;
    uint16_t m_nParent;
    uint16_t m_nChild;
    modellib_VPhysXConstraintParams_t m_params;
};

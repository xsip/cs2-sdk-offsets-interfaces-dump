#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_CovMatrix3 {
    Vector m_vDiag;
    float32 m_flXY;
    float32 m_flXZ;
    float32 m_flYZ;
};

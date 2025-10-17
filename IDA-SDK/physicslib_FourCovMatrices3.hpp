#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FourCovMatrices3 {
    FourVectors m_vDiag;
    fltx4 m_flXY;
    fltx4 m_flXZ;
    fltx4 m_flYZ;
};

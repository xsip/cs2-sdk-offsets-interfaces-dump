#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_JiggleBoneSettings_t {
    int32_t m_nBoneIndex;
    float32 m_flSpringStrength;
    float32 m_flMaxTimeStep;
    float32 m_flDamping;
    Vector m_vBoundsMaxLS;
    Vector m_vBoundsMinLS;
    animgraphlib_JiggleBoneSimSpace m_eSimSpace;
};

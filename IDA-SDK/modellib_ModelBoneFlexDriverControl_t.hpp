#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_ModelBoneFlexDriverControl_t {
    modellib_ModelBoneFlexComponent_t m_nBoneComponent;
    char pad_376[0x4];
    CUtlString m_flexController;
    uint32_t m_flexControllerToken;
    float32 m_flMin;
    float32 m_flMax;
    char end_pad_377[0x4];
};

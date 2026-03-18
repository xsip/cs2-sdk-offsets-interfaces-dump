#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_MaterialOverride_t {
    uint32_t m_nSceneObjectIndex;
    uint32_t m_nSubSceneObject;
    uint32_t m_nDrawCallIndex;
    char pad_2580[0x4];
    char m_pMaterial[0x8];
    Vector m_vLinearTintColor;
    char end_pad_2581[0x4];
};

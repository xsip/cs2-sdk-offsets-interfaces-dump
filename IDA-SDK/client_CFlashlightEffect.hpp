#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CFlashlightEffect {
    void **__vftable_0;
    void **__vftable_1;
    bool m_bIsOn;
    char pad_1729[0xf];
    bool m_bMuzzleFlashEnabled;
    char pad_1730[0x3];
    float32 m_flMuzzleFlashBrightness;
    char pad_1731[0x8];
    Quaternion m_quatMuzzleFlashOrientation;
    Vector m_vecMuzzleFlashOrigin;
    float32 m_flFov;
    float32 m_flFarZ;
    float32 m_flLinearAtten;
    bool m_bCastsShadows;
    char pad_1732[0x3];
    float32 m_flCurrentPullBackDist;
    char m_FlashlightTexture[0x8];
    char m_MuzzleFlashTexture[0x8];
    char m_textureName[64];
    char end_pad_1733[0x230];
};

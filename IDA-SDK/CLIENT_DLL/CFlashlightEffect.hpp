#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CFlashlightEffect {
    char _vtable_pad_363[0x10];
    bool m_bIsOn;
    char pad_364[0xf];
    bool m_bMuzzleFlashEnabled;
    char pad_365[0x3];
    float32 m_flMuzzleFlashBrightness;
    char pad_366[0x8];
    Quaternion m_quatMuzzleFlashOrientation;
    Vector m_vecMuzzleFlashOrigin;
    float32 m_flFov;
    float32 m_flFarZ;
    float32 m_flLinearAtten;
    bool m_bCastsShadows;
    char pad_367[0x3];
    float32 m_flCurrentPullBackDist;
    char m_FlashlightTexture[0x8];
    char m_MuzzleFlashTexture[0x8];
    char m_textureName[64];
    char end_pad_368[0x230];
};

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStoreComponent } from './local-store.component';

describe('LocalStoreComponent', () => {
  let component: LocalStoreComponent;
  let fixture: ComponentFixture<LocalStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
